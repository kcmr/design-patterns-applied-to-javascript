export const pipeline = (...steps) => {
  return (lastStep) => {
    return steps.reduceRight(
      (next, step) => new step(next),
      new lastStep(null)
    );
  };
};
