import styles from "./mid-section.module.css";

function MidSection() {
  return (
    <>
      <div className={`${styles.back} text-center`}>
        <h1 className={`${styles.heading} display-5 fw-bold`}>
          Explore the Possibilities of
          <p className={styles.innerpara}> AI Book Writing </p> with BookAI
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className={`${styles.para} lead mb-2`}>
            Unleash the power of AI to create captivating books in minutes.
            Download, Distribute wherever you want. Generate unlimited free
            books
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-sm-3">
              Get Started
            </button>
            <button
              type="button"
              className={`${styles.button} btn btn-primary btn-lg px-4`}>
              Get API Key
            </button>
          </div>
        </div>
        <p className={`${styles.para1}`}>
          Attention:TryBookAI has been acquired by Indicus AI. Indicus LLM will
          be used for text and image generation
        </p>
      </div>
    </>
  );
}

export default MidSection;
