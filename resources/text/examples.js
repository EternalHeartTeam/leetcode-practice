export const lcExamples = `
Examples:
  # Command with no parameters
  $ lc          // Get a question for today.
  $ lc 1314     // Get a question by its identity.
  # Exclusive commands
  $ lc -t       // Full text command to get a question for today.
  $ lc -i 1314  // Full text command to get a question by its identity.
  $ lc -r       // Get a question randomly.
  # Other instructions
  $ lc -e       // Easy mode to create a question.
  $ lc -d src   // Use the relative path to the source folder.
  $ lc -u       // Check the version to determine whether to update to the latest one.
  $ lc -l       // Get the code language of question.
  $ lc -l java  // Set the code language of question.
  $ lc -v       // Check the CLI version.
  $ lc -h       // Check the help information.
  
`;

export const lkExamples = `
Examples:
  # Command with no parameters
  $ lk          // Check today's question.
  $ lk 1314     // Check the question by its ID.
  # Exclusive commands
  $ lk -t       // Full text command to check today's question.
  $ lk -i 1314  // Full text command to check the question by its ID.
  $ lk -r       // Check a randomly generated question.
  # Other instructions
  $ lk -e       // Easy mode to check a question.
  $ lk -d src   // Use the relative path to the source folder.
  $ lk -l       // Get the code language of question.
  $ lk -l java  // Set the code language of question.
  $ lk -u       // Check the version to determine whether to update to the latest one.
  $ lk -v       // Check the CLI version.
  $ lk -h       // Display the help information.
  
`;

export const lfExamples = `
Examples:
  # Command with no parameters

  # Exclusive commands

  # Other instructions
  $ lf -e       // Easy mode to check a question.
  $ lf -d src   // Use the relative path to the source folder.
  $ lf -l       // Get the code language of question.
  $ lf -l java  // Set the code language of question.
  $ lf -u       // Check the version to determine whether to update to the latest one.
  $ lf -v       // Check the CLI version.
  $ lf -h       // Display the help information.
  
`;