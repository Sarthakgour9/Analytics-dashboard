# Theme Implementation Plan

## Information Gathered
- ThemeContext.jsx: Handles theme state and toggling between 'dark' and 'light'
- index.css: Currently only has dark theme variables under :root
- App.css: Uses CSS variables for theming
- Components: Layout, Sidebar, Dashboard, Charts, Tables, Maps, etc. all need proper theming

## Plan
- [x] Add light theme CSS variables in index.css using [data-theme="light"] selector
- [x] Ensure all components use CSS variables for colors, backgrounds, borders
- [x] Optimize colors for premium feel in both themes
- [x] Verify component visibility in both themes
- [x] Test theme switching functionality

## Dependent Files to Edit
- src/index.css: Add light theme variables and ensure proper selectors

## Followup Steps
- [ ] Test theme toggle in browser
- [ ] Verify all components are visible and properly styled in both themes
- [ ] Check for any hardcoded colors that need to be replaced with variables
