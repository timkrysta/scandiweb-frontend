function FurnitureSpecificInputs() {
  return (
    <>
      <div className="row mb-3">
        <label className="col-sm-4 col-form-label" htmlFor="height">
          Height (CM)
        </label>
        <div className="col-sm-8">
          <input type="number" className="form-control" min="1" id="height" name="height" required />
          <div className="validation-message"></div>
        </div>
      </div>
      <div className="row mb-3">
        <label className="col-sm-4 col-form-label" htmlFor="width">
          Width (CM)
        </label>
        <div className="col-sm-8">
          <input type="number" className="form-control" min="1" id="width" name="width" required />
          <div className="validation-message"></div>
        </div>
      </div>
      <div className="row mb-3">
        <label className="col-sm-4 col-form-label" htmlFor="length">
          Length (CM)
        </label>
        <div className="col-sm-8">
          <input type="number" className="form-control" min="1" id="length" name="length" required />
          <div className="validation-message"></div>
        </div>
      </div>
      <p>Please, provide dimensions in HxWxL format.</p>
    </>
  );
}

export default FurnitureSpecificInputs;