function DvdSpecificInputs() {
  return (
    <>
      <div className="row mb-3">
        <label className="col-sm-4 col-form-label" htmlFor="size">
          Size (MB)
        </label>
        <div className="col-sm-8">
          <input type="number" className="form-control" min="1" id="size" name="size" required />
          <div className="validation-message"></div>
        </div>
      </div>
      <p>Please, provide the size in megabytes.</p>
    </>
  );
}

export default DvdSpecificInputs;