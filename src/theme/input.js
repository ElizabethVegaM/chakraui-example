// yellow: "#ffE521",
// pink: "#ff009e",
// green: "#56f89a"

const Input = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: 'bold',
    borderRadius: 'none',
    borderColor: 'black',
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: 'md',
      px: 6, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
  },
  // Two variants: outline and solid
  variants: {
    yellowBtn: {
      bg: '#ffE521',
      color: 'black.500',
      _hover: {
        bg: '#ff009e',
        _disabled: {
          textDecoration: 'none',
        },
      },
    },
    solid: {
      bg: 'purple.500',
      color: 'white',
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'yellowBtn',
  },
};

export default Input;
