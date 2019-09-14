import { Game } from "./game/game";

class Main {

  public run(): void {
    new Game().test("Hello world!");
  }	
}

let main = new Main();
main.run();

