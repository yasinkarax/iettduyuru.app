/\*
Sass (Syntactically Awesome Style Sheets) Features Summary:

1. Variables

- Store values (colors, fonts, etc.) for reuse.
- Example: $primary-color: #333;

3. Partials & Import

- Split styles into multiple files (\_partial.scss) and import them.
- Example: @import 'reset';

4. Mixins

- Define reusable blocks of styles with optional parameters.
- Example:
  @mixin border-radius($radius) {
  border-radius: $radius;
  }

5. Inheritance (Extend)

- Share styles between selectors.
- Example: @extend .message;

6. Operators

- Perform calculations (math, color functions).
- Example: width: 100% / 3;

7. Functions

- Built-in and custom functions for logic and manipulation.
- Example: lighten($color, 10%);

8. Control Directives

- Use if, for, each, while for logic and loops.
- Example:
  @for $i from 1 through 3 {
   .col-#{$i} { width: 100% / $i; }
  }

9. Comments

- Single-line (//) and multi-line (/_ ... _/) comments.

10. Modules (@use, @forward)

- Modern way to organize and share code between files.

11. Interpolation

- Insert variables or expressions into selectors or property names.
- Example: .icon-#{$name}

12. Error Handling

- @error, @warn, @debug directives for debugging.

Sass supports both the indented syntax (.sass) and SCSS (.scss).
\*/
