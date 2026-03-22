import { render, screen } from '@testing-library/react';
import StepIndicator from '../StepIndicator';

// Test 1 — renders all four step labels

// On simule le rendu du composant à l'étape 0 (première étape) et on vérifie que les 4 labels sont bien affichés à l'écran : "Montant", "Fonds", "Allocation", "Confirmation".

// Test 2 — marks completed steps with a checkmark

// On simule le rendu à l'étape 2 (Allocation). Les étapes 0 et 1 sont donc terminées → on vérifie qu'il y a bien 2 coches ✓ affichées.

// Test 3 — shows the correct step number as active

// On simule le rendu à l'étape 1 (index 1 = deuxième étape). On vérifie que le numéro "2" est affiché comme étape active (index 1 + 1 = 2).

describe('StepIndicator', () => {

  it('renders all four step labels', () => {
    render(<StepIndicator currentStep={0} />);
    expect(screen.getByText('Montant')).toBeInTheDocument();
    expect(screen.getByText('Fonds')).toBeInTheDocument();
    expect(screen.getByText('Allocation')).toBeInTheDocument();
    expect(screen.getByText('Confirmation')).toBeInTheDocument();
  });

  it('marks completed steps with a checkmark', () => {
    render(<StepIndicator currentStep={2} />);
    expect(screen.getAllByText('✓')).toHaveLength(2);
  });

  it('shows the correct step number as active', () => {
    render(<StepIndicator currentStep={1} />);
    expect(screen.getByText('2')).toBeInTheDocument();
  });
});
