import * as THREE from "three";
import { Vector3 } from "three";
import { Cube } from "./cube";

export class Piece {
  constructor(x = 0, y = 0) {
    // super();
    // this.orientation = orientation;
    // this.pos = pos;
    this.x = x;
    this.y = y;
    this.listeCube = [];
    // this.ajouterCubeTableau = ajouterCubeTableau;
    this.Piece = this.createRandomPiece();
    this.isControlled = false;
  }

  getRandomColour() {

    let colors = [
      0x03fbf9,
      0xc4ff00,
      0xff0000,
      0x03ff00,
      0xc400ff,
      0xff00ee,
      0xe46000,
      0xdc143c,
      0x0000ff,
    ];
    let randomNum = Math.floor(Math.random() * colors.length);
    let couleur = colors[randomNum];
    return couleur;
  }


  createRandomPiece(shape = "") {
    //random number 1-7
    let rand = Math.floor(Math.random() * 7) + 1;
    // let rand = 6;
    let piece = new THREE.Group();
    let color = this.getRandomColour();

    let arrayCube = this.SwitchCaseCreatePiece(rand, color, shape);
    // switch (rand) {
    //   case 1: this.name = "I"; break;
    //   case 2: this.name = "J"; break;
    //   case 3: this.name = "L"; break;
    //   case 4: this.name = "O"; break;
    //   case 5: this.name = "Z"; break;
    //   case 6: this.name = "T"; break;
    //   case 7: this.name = "S"; break;
    // }

    arrayCube.forEach(cube => {
      cube.Cube.position.y += this.y;
      cube.Cube.position.x += this.x;
      this.listeCube.push(cube.Cube)
    });

    return piece;
  }

  SwitchCaseCreatePiece(pieceNum, color) {

    let cube1, cube2, cube3, cube4;
    switch (pieceNum) {
      case 1: // I Shape
        // let cube1 = new Cube(2.5,color,0,,-2.5);
        cube1 = new Cube(2.5, color, 0, 5, -2.5);
        cube2 = new Cube(2.5, color, 0, 2.5, -2.5);
        cube3 = new Cube(2.5, color, 0, 0, -2.5);
        cube4 = new Cube(2.5, color, 0, -2.5, -2.5);
        break;
      case 2: // j Shape
        cube1 = new Cube(2.5, color, 0, 0, -2.5);
        cube2 = new Cube(2.5, color, 2.5, 0, -2.5);
        cube3 = new Cube(2.5, color, 2.5, 2.5, -2.5);
        cube4 = new Cube(2.5, color, 2.5, 5, -2.5);
        break;
      case 3: // L Shape
        cube1 = new Cube(2.5, color, 0, 0, -2.5);
        cube2 = new Cube(2.5, color, -2.5, 0, -2.5);
        cube3 = new Cube(2.5, color, -2.5, 2.5, -2.5);
        cube4 = new Cube(2.5, color, -2.5, 5, -2.5);
        break;
      case 4: // O Shape
        cube1 = new Cube(2.5, color, 0, 0, -2.5);
        cube2 = new Cube(2.5, color, 2.5, 0, -2.5);
        cube3 = new Cube(2.5, color, 2.5, 2.5, -2.5);
        cube4 = new Cube(2.5, color, 0, 2.5, -2.5);
        break;
      case 5: // Z Shape
        cube1 = new Cube(2.5, color, 2.5, 0, -2.5);
        cube2 = new Cube(2.5, color, 0, 0, -2.5);
        cube3 = new Cube(2.5, color, 0, 2.5, -2.5);
        cube4 = new Cube(2.5, color, -2.5, 2.5, -2.5);
        break;
      case 6: // T Shape
        cube1 = new Cube(2.5, color, -2.5, 0, -2.5);
        cube2 = new Cube(2.5, color, 0, 0, -2.5);
        cube3 = new Cube(2.5, color, 2.5, 0, -2.5);
        cube4 = new Cube(2.5, color, 0, 2.5, -2.5);
        break;
      case 7: // S Shape
        cube1 = new Cube(2.5, color, -2.5, 0, -2.5);
        cube2 = new Cube(2.5, color, 0, 0, -2.5);
        cube3 = new Cube(2.5, color, 0, 2.5, -2.5);
        cube4 = new Cube(2.5, color, 2.5, 2.5, -2.5);
        break;
    }

    return [cube1, cube2, cube3, cube4];

  }

  createPiece(pieceNum, color, oriantation = false) {
    //random number 1-7
    let piece = new THREE.Group();

    let arrayCube = this.SwitchCaseCreatePiece(pieceNum, color);


    arrayCube.forEach(cube => {
      if(oriantation){
        let y = cube.Cube.position.y;
        let x = cube.Cube.position.x;

        let [new_x, new_y] = BigMath(x,y);
        cube.Cube.position.y = new_y;
        cube.Cube.position.x = new_x;

      }
      cube.Cube.position.y += 17;
      cube.Cube.position.x -= 25;
      piece.add(cube.Cube);
    });

    return piece;
  }
}

function BigMath(x, y) {
  return [-y, x];
}
