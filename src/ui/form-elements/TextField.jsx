import { Form } from "react-bootstrap";

export default function TextField({ label, icon, ...props }) {
  return (
    <div className="input-field">
      <label htmlFor={props.id}>
        {icon} {label}
      </label>
      <Form.Control as={"textarea"} className="form-control" {...props} />
    </div>
  );
}
