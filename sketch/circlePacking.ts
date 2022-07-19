interface Circle {
    pos: Position;
    radius: number;
}
interface Position {
    x: number;
    y: number;
}


function calculatePackedCircles(areaWidth: number, areaHeight: number): Circle[] {
    //TODO: you need to implement this function properly!  
    //These are just a couple of random circles, with no consideration yet for overlap.
    
    const validatedCircles: Circle[]= [];

    for (let i=0; i<200; i++) {
        const candidate: Circle = makeCircle(areaWidth,areaHeight);
        if (!overlap(candidate, validatedCircles)) {
            validatedCircles.push(candidate)
        }

    }

    return validatedCircles
}

function makeCircle(areaWidth: number, areaHeight: number): Circle {
    const randomCircle: Circle = { pos: { x: random(0, areaWidth), y: random(0, areaHeight) }, radius: random(0,30) }
    return randomCircle

}

function overlap(candidate: Circle, validatedCircles: Circle[]): boolean {
  
    for (const individualCircle of validatedCircles) {
        if (candidate.radius + individualCircle.radius > distance(candidate.pos, individualCircle.pos)) {
            return true
         }
    }

    return false 

}


/** Returns the distance between two given positions.
    This function doesn't require p5.js 
 */
function distance(p1: Position, p2: Position): number {
    const x = p1.x - p2.x;
    const y = p1.y - p2.y;
    const hyp = Math.sqrt(x * x + y * y);
    return hyp;
}