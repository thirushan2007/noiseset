import { Accordion } from "react-bootstrap";
import "./Filter.css";

const FilterBar = () => {
  return (
    <div className="displaying-filter-bar">
      <h3>Filters:</h3>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Sort by</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <input type="radio" name="Featured" id="Featured" />
                Featured
              </li>
              <li>
                <input type="radio" name="Best selling" id="Best selling" />
                Best selling
              </li>
              <li>
                <input type="radio" name="p-low" id="p-low-to-high" />
                Price, low to high
              </li>
              <li>
                <input type="radio" name="p-high" id="p-high-to-low" />
                Price, high to low
              </li>
              <li>
                <input type="radio" name="d-old" id="d-old-to-new" />
                Date, old to new
              </li>
              <li>
                <input type="radio" name="d-new" id="d-new-to-old" />
                Date, new to old
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Price</Accordion.Header>
          <Accordion.Body></Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Display Type</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <input type="checkbox" />
                AMOLED
              </li>
              <li>
                <input type="checkbox" />
                Amoled
              </li>
              <li>
                <input type="checkbox" />
                HD Display
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Screen Size</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <input type="checkbox" />
                1.3" - 1.4" (Round)
              </li>
              <li>
                <input type="checkbox" />
                1.4" - 1.48" (Round)
              </li>
              <li>
                <input type="checkbox" />
                1.7" - 1.85" Medium (square)
              </li>
              <li>
                <input type="checkbox" />
                1.7" - 1.85" Medium
              </li>
              <li>
                <input type="checkbox" />
                1.85" - 2" Ultra (Square)
              </li>
              <li>
                <input type="checkbox" />
                1.96"
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Shape Dial</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <input type="checkbox" />
                Rectangular
              </li>
              <li>
                <input type="checkbox" />
                Round
              </li>
              <li>
                <input type="checkbox" />
                Square
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FilterBar;
