# Self Wiki Project Overview

## Database Section

**user**

- id: required
- email: required
- name: optional
- pro: boolean (default false)
- deleted: boolean (default false)
- created_at: required
- updated_at: required

**item**

- id: required
- title: required
- text: optional
- link: optional
- image_link: optional
- description: optional
- deleted: boolean (default false)
- user_id (Foreign Key)
- created_at: required
- updated_at: required
- collection_id: optional (uncategorized if empty)

**tag**

- id: required
- title: required
- deleted: boolean (default false)
- user_id (Foreign Key)
- created_at: required
- updated_at: required

**item-tags junction table**

- item_id (Foreign Key referencing Items.id)
- tag_id (Foreign Key referencing Tags.id)
- Composite Primary Key: (item_id, tag_id) ensures an item can't have the same tag twice

**collection**

- id: required
- title: required
- category_id: required
- deleted: boolean (default false)
- user_id (Foreign Key)
- created_at: required
- updated_at: required

**category**

- id: required
- title: required
- deleted: boolean (default false)
- user_id (Foreign Key)
- created_at: required
- updated_at: required

## Features (Logical Structure)

**Category**

- Can contain multiple collections
- Is editable
  - Add
  - Rename
  - Mark as deleted (only if either empty or contains only deleted collections)

**Collection**

- Can contain multiple items
- Is editable
  - Add
  - Rename
  - Mark as deleted (only if either empty or contains only deleted items)

**Item**

- Is editable
  - Add
  - Rename
  - Mark as deleted (only if either empty or contains only deleted items)
- Title
- Text
- Image
- Link
- Description
  - Editable
  - Button to auto generate
- Tags
  - Add
  - Remove
  - Button to suggest relevant tag from existing

## User Management

- Authentication
- Login
- Register
- Use NextAuth

## UI

- Responsive
- Top bar
  - Logo (placeholder initially)
  - User email + pro tag if applicable
  - Logout button
- Side Menu
  - Full-Text Search field
  - Add Item (requires at least one collection to be enabled)
  - Collection Management (requires at least one category to be enabled)
  - Category Management
- Main
  - Breadcrumbs
  - Filter chips (list of all tags)
  - Category screen (default)
    - Category list as cards
    - Each category links to a collection screen
  - Collection screen
    - Collection list as cards
    - Each collection links to the items screen
  - Items screen
    - Item list as cards
    - Each item links to an individual item screen
  - Individual item screen
    - Title field
    - Link to an external resource opening in a new tab
    - Text field
    - Image
    - Description
    - Edit/Save button (turns all fields to editable with auto-save feature)
    - Delete button (with confirmation dialog)

## Reference

Refer to the screenshots in the screenshots folder as general design guidelines.

- @context/screenshots/main-dashboard-screen.png
