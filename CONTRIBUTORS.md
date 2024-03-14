[中文](./CONTRIBUTORS_CN.md) · **English**

# Contributor

If you would like to contribute to our project, please carefully read the following development conventions. Only when we have a consensus can our project get better and better!

## Contributing Code

### 1. Branch Management

Do not develop on the `master` branch. The `master` branch is only for merging pull requests and releasing versions. For daily development, please use the `dev` branch. For feature development, please create a feature branch named `feat-xxx`. Similarly, for bug fixes, please create a fix branch named `fix-xxx`.

### 2. Commit Process

After completing development and committing on the `dev` branch or a `feat-xxx` branch, please use `git rebase origin/master` for local merging. After resolving all code conflicts locally, submit a pull request to members with permission for timely merging.

## 3. About Feature and Dev Branches

By default, feature and fix branches will be deleted after being merged into `master` via pull request.

The `dev` branch will not be deleted.

## References

Reference Link: [Branch Management](https://www.ruanyifeng.com/blog/2012/07/git.html)
