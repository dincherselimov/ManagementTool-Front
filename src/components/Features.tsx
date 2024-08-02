import React from "react";

export default function Features () {

    const features = [
        {
          title: 'Increase sales',
          description: 'Consectetur pariatur irure exercitation sit amet id consectetur consectetur magna et Lorem labore qui velit.',
        },
        {
          title: 'Enterprise-ready',
          description: 'Labore duis pariatur est exercitation laboris cupidatat amet cillum. Amet nisi ullamco.',
        },
        {
          title: 'Unlimited growth',
          description: 'Elit deserunt nisi esse duis cupidatat proident sit minim mollit officia pariatur incididunt in tempor.',
        },
        {
          title: 'Recommended by experts',
          description: 'Velit sit tempor pariatur quis pariatur incididunt culpa dolor voluptate officia incididunt velit dolore.',
        },
        {
          title: 'Modern platform',
          description: 'Laboris elit consectetur sint nisi eu mollit proident sit magna velit adipisicing consequat amet reprehenderit.',
        },
        {
          title: 'Integrations',
          description: 'Nostrud excepteur incididunt proident sit nulla ipsum sunt nostrud est esse adipisicing irure officia consectetur.',
        },
      ];
      
    return(
        <section className="features-section">
        <h2 className="title">How we change the game</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
}