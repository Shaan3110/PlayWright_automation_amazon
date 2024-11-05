#!/bin/bash

# Ensure the script is executable (only necessary the first time)
if [ ! -x "$0" ]; then
    chmod +x "$0"
fi

# Check if TEST_ENV and TEST_LOB are provided as environment variables
# or passed as command-line arguments.
ENV=${TEST_ENV:-$1}
LOB=${TEST_LOB:-$2}

# If ENV or LOB are not provided, exit with an error
if [[ -z "$ENV" ]]; then
  echo "Error: TEST_ENV is not set. Please provide the environment (e.g., demo, uat, prod)."
  exit 1
fi

if [[ -z "$LOB" ]]; then
  echo "Error: TEST_LOB is not set. Please provide the LOB (e.g., lob1, lob2)."
  exit 1
fi

echo "Running tests for ENV: $ENV and LOB: $LOB..."

# Exporting the variables for Playwright
export TEST_ENV=$ENV
export TEST_LOB=$LOB

# Run Playwright tests
npx playwright test

# Generate the report
npx playwright show-report
