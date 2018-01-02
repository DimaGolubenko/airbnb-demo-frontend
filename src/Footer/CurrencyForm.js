import React from "react";
import { Form, Select, FakeSelect, Option } from "./styled";

const CurrencyForm = Form.extend``;

export default () => {
  return (
    <CurrencyForm>
      <FakeSelect>United States dollar</FakeSelect>
      <Select name="currency">
        <Option value="United States dollar" selected>
          United States dollar
        </Option>
      </Select>
    </CurrencyForm>
  );
};
