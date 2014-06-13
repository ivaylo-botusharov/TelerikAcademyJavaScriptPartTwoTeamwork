/*jslint browser: true*/

(function () {
    'use strict';

    function Animation(solarSystem, layer) {
        this.anim = new Kinetic.Animation(function (frame) {
            var bodies = solarSystem.spaceObjects;

            for (var i = 0, len = bodies.length; i < len; i += 1) {
                //planets orbiting around the Sun; a,b - ellipse radii
                bodies[i].setX(bodies[i].a * Math.cos(frame.time * 2 * Math.PI / bodies[i].period) + bodies[i].orbit.x());
                bodies[i].setY(bodies[i].b * Math.sin(frame.time * 2 * Math.PI / bodies[i].period) + bodies[i].orbit.y());
                
                //planets and Sun rotating on their axes
                angleDiff = frame.timeDiff * bodies[i].angularSpeed / 1000;
                bodies[i].rotate(angleDiff);
            }

        }, layer);
    }

    Animation.prototype.start = function () {
        this.anim.start();
    }

    Animation.prototype.stop = function () {
        this.anim.stop();
    }

}());