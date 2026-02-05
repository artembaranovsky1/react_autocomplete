import React from 'react';
import './App.scss';
import { peopleFromServer } from './data/people';
import Dropdown from './components/Dropdown';
import { Person } from './types/Person';

export const App: React.FC = () => {
  const [selectedPeople, setSelectedPeople] = React.useState<Person | null>(
    null,
  );

  return (
    <div className="container">
      <main className="section is-flex is-flex-direction-column">
        {selectedPeople ? (
          <h1 className="title" data-cy="title">
            {`${selectedPeople?.name} (${selectedPeople?.born} - ${selectedPeople?.died})`}
          </h1>
        ) : (
          <h1 className="title" data-cy="title">
            No selected person
          </h1>
        )}

        <Dropdown
          people={peopleFromServer}
          selectedPeople={selectedPeople}
          onSelected={p => setSelectedPeople(p)}
        />

        {/*<div className="dropdown-menu" role="menu" data-cy="suggestions-list">*/}
        {/*  <div className="dropdown-content">*/}
        {/*    <div className="dropdown-item" data-cy="suggestion-item">*/}
        {/*      <p className="has-text-link">Pieter Haverbeke</p>*/}
        {/*    </div>*/}

        {/*    <div className="dropdown-item" data-cy="suggestion-item">*/}
        {/*      <p className="has-text-link">Pieter Bernard Haverbeke</p>*/}
        {/*    </div>*/}

        {/*    <div className="dropdown-item" data-cy="suggestion-item">*/}
        {/*      <p className="has-text-link">Pieter Antone Haverbeke</p>*/}
        {/*    </div>*/}

        {/*    <div className="dropdown-item" data-cy="suggestion-item">*/}
        {/*      <p className="has-text-danger">Elisabeth Haverbeke</p>*/}
        {/*    </div>*/}

        {/*    <div className="dropdown-item" data-cy="suggestion-item">*/}
        {/*      <p className="has-text-link">Pieter de Decker</p>*/}
        {/*    </div>*/}

        {/*    <div className="dropdown-item" data-cy="suggestion-item">*/}
        {/*      <p className="has-text-danger">Petronella de Decker</p>*/}
        {/*    </div>*/}

        {/*    <div className="dropdown-item" data-cy="suggestion-item">*/}
        {/*      <p className="has-text-danger">Elisabeth Hercke</p>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </main>
    </div>
  );
};
