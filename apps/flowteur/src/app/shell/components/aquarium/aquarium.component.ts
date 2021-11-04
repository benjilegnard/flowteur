import { Component, OnInit, NgZone, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { v4 } from 'uuid';

const MAX_BUBBLES = 24;
const WIDTH = 160;
const HEIGHT = 90;
/**
 * Velocity is a vector applied on
 * It represents direction + speed.
 * Values range from -1 to +1
 */
export interface Velocity {
  dx: number;
  dy: number;
}
export interface Particle {
  id: string;
  x: number;
  y: number;
  r: number;
  d: number;
  f: string;
  v?: Velocity;
}
/**
 * This component manages two particles system to animate circles with a gooey effect.
 * Big circles take 12% of the heigh
 */
@Component({
  selector: 'flw-aquarium',
  templateUrl: './aquarium.component.html',
  styleUrls: ['./aquarium.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AquariumComponent implements OnInit {
  public circles: Particle[] = [];

  constructor(private zone: NgZone, private changeDetector: ChangeDetectorRef) {}

  ngOnInit() {
    for (let i = 0; i < MAX_BUBBLES; i++) {
      this.circles.push(this.generateBubble());
    }
    // start frame
    this.zone.runOutsideAngular(() => {
      requestAnimationFrame(this.tick);
    });
  }

  public tick = (i: number) =>  {
    this.circles.filter(() => true).forEach(particle => {
      // small horizontal deviation
      particle.x = particle.x + Math.sin(i + particle.d*2) * .1;
      // vertical movement
      particle.y += particle.v.dy;
      // reverse direction when out of bounds
      if (particle.y <=  0|| particle.y >= HEIGHT) {
        particle.v.dy = -particle.v.dy;
      }
    });
    this.zone.run(()=>{
      this.changeDetector.detectChanges();
    });
    requestAnimationFrame(this.tick);
  }

  public generateBubble(): Particle {
    return {
      x: Math.floor(Math.random() * WIDTH),
      y: Math.floor(Math.random() * HEIGHT - 10) + 5,
      r: Math.floor(2 + Math.random() * 8),
      v: {
        dx: Math.random() * 2 - 1,
        dy: Math.random() * 2 - 1,
      },
      d: Math.random(),
      f: Math.random() > 0.5 ? "#00003f": "white",
      id: v4(),
    };
  }

  public trackByUUID(item: Particle){
    return item.id;
  }
}
