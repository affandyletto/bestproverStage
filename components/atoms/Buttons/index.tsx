import React from 'react'
import Primary from "./Primary"
import Secondary from "./Secondary"
import Disabled from "./Disabled"
import Tagfilter from "./Tagfilter"

const Buttons = (props: any) => {
    const { control, ...rest } = props;
    switch (control) {
      case "primary":
        return <Primary {...rest} />;
      case "secondary":
        return <Secondary {...rest} />;
      case "disabled":
        return <Disabled {...rest} />;
      case "tagfilter":
        return <Tagfilter {...rest} />;
  
      default:
        return null;
    }
}

export default Buttons