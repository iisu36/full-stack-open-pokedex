# Exercise 1

Zig doesn't have a linting tool, but the Zig compiler is strict and forces you to write quality code, and the built-in formatter can be used for additional code formatting and style checks.

Zig has a built-in testing framework, which is very useful because it integrates with the language, giving feedback during the CI process.

Zig build system has a great cross-compilation support, which makes it easy to build and deploy for multiple platforms in a CI environment.

Besides Jenkins and GitHub Actions, Zig can be used in GitLab CI, Drone CI and CircleCI.

Whether to use a cloud-based or self-hosted CI depends on things like control, scalability, cost, and security. Cloud-based environments are easier to set up and maintain, with less infrastructure overhead. But for projects that need strict security or privacy, self-hosting may offer more control. Smaller applications and teams would benefit more from a cloud-based environment due to the simplicity and the the low costs/time spent. A self-hosted environment would make more sense for a larger application, with control to better meet needs of the application and as the build times reach certain levels, the self-hosting environment becomes also more profitable solution compared to a cloud-based one.
