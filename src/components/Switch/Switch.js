import './Switch.css';

export function Switch({ isToggled, isEnabled, onToggle }) {
  return (
    <div className={`switch-background ${isEnabled ? 'active' : ''}`}>
      <button
        className={`switch-button ${isToggled ? 'clicked' : ''} ${
          isEnabled ? 'active' : ''
        }`}
        onClick={onToggle}
      ></button>
    </div>
  );
}
