class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.container = document.querySelector(selector);
    this.targetDate = targetDate;
    this.refs = {
      secsEl: this.container.querySelector('[data-value="secs"]'),
      minsEl: this.container.querySelector('[data-value="mins"]'),
      hoursEl: this.container.querySelector('[data-value="hours"]'),
      daysEl: this.container.querySelector('[data-value="days"]'),
    };
  }

  #convertTime(time) {
    return {
      days: Math.floor(time / (1000 * 60 * 60 * 24)),
      hours: this.#pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ),
      mins: this.#pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))),
      secs: this.#pad(Math.floor((time % (1000 * 60)) / 1000)),
    };
  }

  #pad(str) {
    return String(str).padStart(2, "0");
  }

  start() {
    this.#updateUI(this.#convertTime(this.targetDate - Date.now()));
    setInterval(() => {
      const convertedTime = this.#convertTime(this.targetDate - Date.now());
      this.#updateUI(convertedTime);
    }, 1000);
  }

  #updateUI({ days, hours, mins, secs }) {
    this.refs.secsEl.textContent = secs;
    this.refs.minsEl.textContent = mins;
    this.refs.hoursEl.textContent = hours;
    this.refs.daysEl.textContent = days;
  }
}

timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2022, 20:32"),
});

timer.start();
