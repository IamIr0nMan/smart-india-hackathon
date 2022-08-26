import React from "react";

function Member(props) {
  const member = { name: "", age: "" };
  const [formData, setFormData] = React.useState(member);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = () => {
    let data = [];
    if (!localStorage.getItem("members")) {
      data.push(formData);
      localStorage.setItem("members", JSON.stringify(data));
    } else {
      data = localStorage.getItem("members");
      data.push(formData);
    }
  };
  return (
    <div>
      <div className="accordion" id={props.person}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={"#" + props.person}
              aria-expanded="false"
              aria-controls={props.person}
            >
              {props.person}
            </button>
          </h2>
          <div
            id={props.person}
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent={"#" + props.person}
          >
            <div className="accordion-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="age" className="form-label">
                    Age
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="age"
                    value={formData.age}
                    onChange={handleChange}
                  />
                </div>
                <button onClick={handleSubmit} className="btn btn-primary">
                  Done
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Member;
