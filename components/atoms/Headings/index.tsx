import React from 'react'
import Heading1 from "./Heading1"
import Heading4 from "./Heading4"
import Heading5 from "./Heading5"

const Headings = (props: any) => {
    const { control, ...rest } = props;
    switch (control) {
      case "h1":
        return <Heading1 {...rest} />;
      case "h4":
        return <Heading4 {...rest} />;
      case "h5":
        return <Heading5 {...rest} />;
  
      default:
        return null;
    }
}

export default Headings