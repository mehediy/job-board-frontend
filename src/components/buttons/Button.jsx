const Button = ({ label, variant, onSubmit, className }) => {
  return (
    <button
      className={`${!variant && ""}  

      ${
        variant == "outline" &&
        "bg-transparent border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-invert"
      }

      ${
        variant == "accent" &&
        "bg-brand-primary border border-transparent text-invert hover:bg-transparent hover:text-brand-primary hover:border-brand-primary"
      }

      ${variant == "disabled" && "bg-darker text-invert"}
      ${className}
      px-8 py-3 font-semibold rounded ease`}
      onSubmit={variant === "disabled" ? null : onSubmit}
      type="submit"
      disabled={variant === "disabled"}
    >
      {label}
    </button>
  );
};

export default Button;
