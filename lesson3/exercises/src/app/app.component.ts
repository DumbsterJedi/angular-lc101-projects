import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Exercises: Angular Lesson 3";

  color = "green";
  height = 0;
  width = 0;
  message = "Space shuttle ready for takeoff!";
  takeoffEnabled: boolean = false;

  handleTakeOff() {
    let result = window.confirm(
      "Are you sure the shuttle is ready for takeoff?"
    );
    if (result) {
      this.color = "blue";
      this.width = 0;
      this.message = "Shuttle in flight.";
      this.takeoffEnabled = true;
    }
  }

  handleLand(rocketImage) {
    let result = window.confirm("Are you sure you want to land?");
    if (result) {
      this.color = "green";
      this.height = 0;
      this.width = 0;
      this.message = "Shuttle grounded.";
      this.height = 0;
      rocketImage.style.bottom = 0;
      this.takeoffEnabled = false;
    }
  }

  handleAbortMission(rocketImage) {
    let result = window.confirm("Confirm mission abort");
    if (result) {
      this.color = "red";
      this.height = 0;
      this.width = 0;
      this.message = "Mission Aborted";
      this.height = 0;
      rocketImage.style.bottom = 0;
      this.takeoffEnabled = false;
    }
  }

  moveRocket(rocketImage, direction) {
    if (direction === "right") {
      let movement = parseInt(rocketImage.style.left) + 10 + "px";
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
    }
    if (direction === "left") {
      let movement = parseInt(rocketImage.style.left) + -10 + "px";
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
    }
    if (direction === "up") {
      let movement = parseInt(rocketImage.style.bottom) + 10 + "px";
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
    }
    if (direction === "down") {
      if (this.height === 10000) {
        this.height = 0;
        rocketImage.style.bottom = 0;
        this.color = "green";
        this.takeoffEnabled = false;
      } else {
        let movement = parseInt(rocketImage.style.bottom) + -10 + "px";
        rocketImage.style.bottom = movement;
        this.height = this.height - 10000;
      }
    }
  }

  tooClose(rocketImage) {
    if (parseInt(rocketImage.style.bottom) > 300) {
      this.color = "orange";
    }
    if (parseInt(rocketImage.style.bottom) == 300) {
      this.color = "blue";
    }
    if (
      parseInt(rocketImage.style.left) === -10 ||
      parseInt(rocketImage.style.left) === 450
    ) {
      this.color = "orange";
    }
    if (parseInt(rocketImage.style.left) === 0) {
      this.color = "blue";
    }
  }
}
