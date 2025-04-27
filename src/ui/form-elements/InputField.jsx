import { Form } from "react-bootstrap";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export default function InputField({ label, toolTipContent, span, ...props }) {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {props.content}
    </Tooltip>
  );

  return (
    <div className="input-field w-100">
      <label htmlFor={props.id}>
        <div className="d-flex justify-content-between align-items-center">
          <span>{label} <b style={{ color: "red" }}>*</b></span>
          {toolTipContent && (
            <OverlayTrigger
              placement="bottom"
              overlay={renderTooltip({
                content: toolTipContent
              })}
            >
              <i className="info-label fa-light fa-circle-info"></i>
            </OverlayTrigger>
          )}
        </div>
      </label>
      <Form.Control className="form-control" {...props} />
      {span && <span className="input-span">{span}</span>}
    </div>
  );
}
