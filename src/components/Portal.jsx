import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

export default function Portal({ children, parentId }) {
  const ref = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = parentId ? document.getElementById(parentId) : document.body;

    if (!ref.current) {
      throw new Error(
        `The element with id "${parentId}" does not exist in the DOM. Please add it to the DOM before using the Portal component.`
      );
    }

    setMounted(true);
  }, [parentId]);

  return mounted ? createPortal(children, ref.current) : null;
}

Portal.defaultProps = {
  parentId: 'portal',
};

Portal.propTypes = {
  children: PropTypes.node.isRequired,
  parentId: PropTypes.string,
};
