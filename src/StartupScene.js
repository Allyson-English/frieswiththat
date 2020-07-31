function StartupScene(game) {
  this._game = game;
  this._pressEnterText = new PressEnterText();

  this._pacman = new Pacman(this, game);
  this._pacman.setStrategy(new PacmanStartupSceneStrategy(this._pacman, this));
  this._pacman.setCurrentSpeed(4);
  this._pacman.setSpeed(4);
  this._pacman.setPosition(new Position(90, 160));
  this._pacman.setDirection(DIRECTION_RIGHT);
}

StartupScene.prototype.keyPressed = function (key) {
  if (key == KEY_ENTER) {
    this._game.setScene(new PlayScene(this._game));
  }
};

StartupScene.prototype.tick = function () {
  this._pressEnterText.tick();
  this._pacman.tick();
};

StartupScene.prototype.draw = function (ctx) {
  this._drawTitle(ctx);
  this._drawControlsHelp(ctx);
  this._pressEnterText.draw(ctx);
  this._pacman.draw(ctx);
};

StartupScene.prototype.getX = function () {
  return 0;
};

StartupScene.prototype.getY = function () {
  return 0;
};

StartupScene.prototype._drawTitle = function (ctx) {
  ctx.fillStyle = "#d0e4f7";
  ctx.font = "bold 56px 'Lucida Console', Monaco, monospace"
  ctx.fillText("VIRAL LOAD", 106, 150);
};

StartupScene.prototype._drawControlsHelp = function (ctx) {
  ctx.fillStyle = "#d0e4f7";
  ctx.font = "bold 14px 'Lucida Console', Monaco, monospace"
  ctx.fillText("CONTROL: ARROW KEYS", 187, 300);
  ctx.fillText("Help Dr. Fauci collect virus samples for testing while", 40, 335);
  ctx.fillText("avoiding the anti-maskers. Pick up hand sanitizer to", 45, 355);
  ctx.fillText("give virus deniers a mask and send them back to home base.", 36, 370);
  ctx.fillText("And collect test tubes for extra points.", 110, 385);
};
