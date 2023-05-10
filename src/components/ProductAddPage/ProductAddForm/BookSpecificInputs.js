function BookSpecificInputs() {
  return (
    <>
      <div className="row mb-3">
        <label className="col-sm-4 col-form-label" htmlFor="weight">
          Weight (KG)
        </label>
        <div className="col-sm-8">
          <input type="number" className="form-control" min="1" id="weight" name="weight" required />
          <div className="validation-message"></div>
        </div>
      </div>
      <p>Please, provide the weight in kilograms (KG).</p>
    </>
  );
}

export default BookSpecificInputs;