function metricReducer(metricValues, action) {
  switch (action.type) {
    case "weight-change": {
      return { ...metricValues, weight: action.weight };
    }
    case "height-change": {
      return { ...metricValues, height: action.height };
    }
    case "reset-values": {
      return { weight: "", height: "" };
    }
    default: {
      throw new Error("Invalid action: " + action.type);
    }
  }
}

function imperialReducer(imperialValues, action) {
  switch (action.type) {
    case "weight-change": {
      return { ...imperialValues, weight: action.weight };
    }
    case "feet-change": {
      return {
        ...imperialValues,
        height: { ...imperialValues.height, feet: action.feet },
      };
    }
    case "inches-change": {
      return {
        ...imperialValues,
        height: { ...imperialValues.height, inches: action.inches },
      };
    }
    case "reset-values": {
      return { weight: "", height: { feet: "", inches: "" } };
    }
    default: {
      throw new Error("Invalid action: " + action.type);
    }
  }
}

export { metricReducer, imperialReducer };
