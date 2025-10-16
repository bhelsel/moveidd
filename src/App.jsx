import "./App.css";

function App() {
  return (
    <>
      <title>Thank You - EMA Check-in Complete</title>
      <div class="thank-you-container">
        <div class="celebration-icon">
          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGZucGZ6cGpuYXgyNnJsMmJkdHcxcXY4eTNrcTIwMTlzYnY0c21ndSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/dnMwfGJPdsqYEbmrD5/giphy.gif"
            alt="Celebration Fireworks"
          />
        </div>

        <div class="thank-you-message">
          <h1>Thank You!</h1>
          <p>
            We appreciate you taking the time to share your experience with us
            today.
          </p>
        </div>

        <div class="completion-info">
          <strong>Check-in Complete</strong>
          <br />
          Your EMA check-in has been successfully completed. See you at your
          next check-in!
        </div>
      </div>
    </>
  );
}

export default App;
