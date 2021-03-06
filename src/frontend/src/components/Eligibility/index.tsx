import React from 'react';
import { ExpungementResultType } from '../SearchResults/types';

interface Props {
  expungement_result: ExpungementResultType;
}

export default class Eligibility extends React.Component<Props> {

  render() {
    const {
      charge_eligibility
    } = this.props.expungement_result;

  const label_color = (charge_eligibility_status: string) => {
    switch (charge_eligibility_status) {
      case "Unknown":
        return "purple bg-washed-purple";
      case "Eligible now":
        return "green bg-washed-green";
      case "Possibly eligible":
        return "purple bg-washed-purple"
      case "Will be eligible":
        return "dark-blue bg-washed-blue"
      case "Possibly will be eligible":
        return "purple bg-washed-purple"
      case "Ineligible":
        return "red bg-washed-red"
    }
  };

    const eligibility = () => {
      return <h2 className= {label_color(charge_eligibility.status) + ' fw6 pv2 ph3 ma2 mb3 dib br3' }>
        {charge_eligibility.label}
      </h2>;
    };

    return eligibility();
  }
}
