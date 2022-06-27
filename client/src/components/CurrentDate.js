import React from "react";
import moment from "moment";

export default function CurrentDate() {
  let myDate;

  return (myDate = moment().format(" ll"));
}
