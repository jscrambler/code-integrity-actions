/**
 * Main action should not be called directly.
 * ALWAYS ADD A SUFFIX WITH ONE THE ROOT FOLDERS (f.e. jscrambler/code-integrity-actions/protect@<version>)
 */

const core = require('@actions/core')

core.setFailed('Main action should not be called directly. Available actions: jscrambler/code-integrity-actions/protect@<version>');