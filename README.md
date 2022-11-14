# Jscrambler Code Integrity Actions

This action integrates Jscrambler Code Integrity Protection into your GitHub build workflow. It automates the protection of your JavaScript Applications so you can run it whenever a new version of your application is built.

Jscrambler Code Integrity protects your application against automated abuse, piracy, tampering, and code theft with enterprise-grade JavaScript obfuscation, code locks, and self-defensive techniques. 

A [Jscrambler account](https://jscrambler.com/signup) is required to use this Action. 

If you haven’t tried Jscrambler Code Integrity product, we advise you to read our [101 First Use](https://blog.jscrambler.com/jscrambler-101-first-use/) guide

## Inputs

First, you need to download the [Jscrambler Settings File](https://docs.jscrambler.com/code-integrity/getting-started#download-your-transformations-and-use-with-api) and place it into your GitHub application repository.  

The following inputs are small subset of the fields you can find in above Settings file, and for that reason they are all optional:

  * `access-key` and `secret-key`: User keys for authentication
  * `application-id`: User application ID
  * `jscrambler-config-path (default: jscrambler.json)`: Path to JSON with Jscrambler configuration, including protection parameters
  * `files-src`: Paths of source files to protect. Glob patterns allowed. Use multiline strings to specify multiple files.
  * `files-dest`: Path of protected output
  * `jscrambler-version`: Jscrambler version to use
  * `protocol`, `host`, `port` and `base-path`: Alternative path of protection server
  * `source-maps`: If you want to generate source-maps
  * `source-maps-source-content (default: true)`: If you want to include the original source code in the source map file
  * `source-maps-output-path`: Path of output source maps
  * `symbol-table-output-path`: Path of output symbol table
  * `debug-mode`: Whether to turn on debug mode

For security reasons, the **secret and access key must not be included** into the Jscrambler Settings file. We recommend using GitHub secrets for this.

## Outputs

Jscrambler generates a `protection-id` as an output

## Usage

Place the [Jscrambler Settings File](https://docs.jscrambler.com/code-integrity/getting-started#download-your-transformations-and-use-with-api) - jscrambler.json - into the root of your GitHub Application Repository, and then add the following steps to your GitHub Workflow:  

```yaml
steps:
- uses: actions/checkout@v3
- uses: jscrambler/code-integrity-actions/protect@v6
  with:
    secret-key: ${{ secrets.JSCRAMBLER_SECRET_KEY }}
    access-key: ${{ secrets.JSCRAMBLER_ACCESS_KEY }}
```
