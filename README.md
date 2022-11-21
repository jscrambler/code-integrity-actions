# Jscrambler Code Integrity Actions

This action integrates Jscrambler Code Integrity Protection into your GitHub build workflow. It automates the protection of your JavaScript Applications so you can run it whenever a new version of your application is built.

Jscrambler Code Integrity protects your application against automated abuse, piracy, tampering, and code theft with enterprise-grade JavaScript obfuscation, code locks, and self-defensive techniques. 

A [Jscrambler account](https://jscrambler.com/signup) is required to use this Action. 

If you haven’t tried Jscrambler Code Integrity product, we advise you to read our [101 First Use](https://blog.jscrambler.com/jscrambler-101-first-use/) guide

## Inputs

First, you need to download the ["No Secrets" Jscrambler Settings File](https://docs.jscrambler.com/latest/code-integrity/getting-started#continuous-integration) and place it into your GitHub application repository.  

The following inputs are small subset of the fields you can find in above Settings file, and for that reason they are all optional:

  * `access-key` and `secret-key`: User keys for authentication. For security reasons, you should use the **GitHub Secrets to securely store secret and access key**.
  * `application-id`: User application ID
  * `jscrambler-config-path (default: jscrambler.json)`: Relative path from the root's repository to JSON with Jscrambler configuration, including protection parameters
  * `files-src`: Paths of source files to protect. Glob patterns allowed. Use multiline strings to specify multiple files.
  * `files-dest`: Path of protected output
  * `jscrambler-version`: Jscrambler version to use
  * `protocol`, `host`, `port` and `base-path`: Alternative path of protection server
  * `source-maps`: If you want to generate source-maps
  * `source-maps-source-content (default: true)`: If you want to include the original source code in the source map file
  * `source-maps-output-path`: Relative path from the root's repository of output source maps
  * `symbol-table-output-path`: Relative path from the root's repository of output symbol table
  * `debug-mode`: Whether to turn on debug mode

## Outputs

Jscrambler generates a `protection-id` as an output

## Usage

Place the ["No Secrets" Jscrambler Settings File](https://docs.jscrambler.com/latest/code-integrity/getting-started#continuous-integration) - jscrambler.json - into the root of your GitHub Application Repository, and then add the following steps to your GitHub Workflow:  

```yaml
steps:
- uses: jscrambler/code-integrity-actions/protect@v6
  with:
    secret-key: ${{ secrets.JSCRAMBLER_SECRET_KEY }}
    access-key: ${{ secrets.JSCRAMBLER_ACCESS_KEY }}
    application-id: ${{ secrets.JSCRAMBLER_APPLICATION_ID }}
```

Please refer to the following [link](https://docs.jscrambler.com/latest/code-integrity/documentation/github-ci-integration) for the complete integration guide.