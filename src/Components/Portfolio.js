import React, { Component } from "react";
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList"

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: ["All", "Websites", "Flayers", "Business Cards"],
      selected: "All",
      projects: this.projectsArray(),
    };
  }

  projectsArray = () => {
    return [
      {
        img:
          "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
        category: "Business Cards",
      },

      {
        img:
          "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
        category: "Websites",
      },
      {
        img:
          "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
        category: "Websites",
      },
      {
        img:
          "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
        category: "Websites",
      },
      {
        img:
          "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
        category: "Business Cards",
      },
      {
        img:
          "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
        category: "Websites",
      },
      {
        img:
          "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
        category: "Websites",
      },
      {
        img:
          "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
        category: "Business Cards",
      },
      {
        img:
          "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
        category: "Websites",
      },
      {
        img:
          "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
        category: "Flayers",
      },
      {
        img:
          "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
        category: "Websites",
      },
      {
        img:
          "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
        category: "Business Cards",
      },
      {
        img:
          "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
        category: "Websites",
      },
      {
        img:
          "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
        category: "Websites",
      },
      {
        img:
          "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
        category: "Business Cards",
      },
      {
        img:
          "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
        category: "Websites",
      },
      {
        img:
          "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
        category: "Flayers",
      },
    ];
  };

  onSelectFilter = (event) => {
    const filter = event.target.textContent;
    this.setState({ selected: filter });

    const newArr = this.projectsArray();
    if (filter !== "All") {
      const filteredProjects = newArr.filter((proj) => proj.category === filter);
      this.setState({ projects: filteredProjects });
    } else {
      this.setState({ projects: this.projectsArray() });
    }
  };

  render() {
    return (
      <>
        <Toolbar
          filters={this.state.filters}
          selected={this.state.selected}
          changeFilter={this.changeFilter}
          onSelectFilter={this.onSelectFilter}
        />
        <ProjectList
          selected={this.state.selected}
          projects={this.state.projects}
        />
      </>
    );
  }
}

export default Portfolio;