// #21 React Hooks Bangla - React useCallback & useMemo hook
import React from 'react';
function Button({ handleClick, children }) {
  console.log('rendering button');
  return (
    <p>
      <button type="button" onClick={handleClick}>
        {children}
      </button>
    </p>
  );
}
export default React.memo(Button);
