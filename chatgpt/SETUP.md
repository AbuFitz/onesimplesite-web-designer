# Set up the OneSimpleSite Prompt Studio in ChatGPT

The recommended setup is a ChatGPT Project because it keeps instructions, source files, and continuing conversations together.

## One-time setup

1. In ChatGPT, select **New project** in the sidebar.
2. Name it **OneSimpleSite Prompt Studio**.
3. Open the project's **•••** menu and select **Project settings**.
4. Copy the full contents of `PROJECT_INSTRUCTIONS.md` into the project instructions field.
5. Add `ONESIMPLESITE_CONTEXT.md` as a project source/file.
6. Start new website-planning chats inside that project.

If this existing conversation is eligible, move it into the project from the chat menu. It will then inherit the project's instructions and file context.

## How to use it

Talk naturally. Examples:

```text
I have a builder in Watford. They need quote requests and I want the site clean but not like every other trades website. Help me shape the Claude prompt.
```

```text
I want a mad immersive launch site for a custom wheel company. Think metallic depth and TikTok impact, but the product and enquiry route still need to be obvious.
```

```text
Here are the current site, three competitors and the client's logo. Research the gaps, then make me a Claude Code prompt using our skill.
```

When ready, say:

```text
Make the final Claude prompt.
```

ChatGPT will return a paste-ready prompt invoking the correct OneSimpleSite skill, plus any assumptions or missing attachments you should notice.

## Keep it current

When the OneSimpleSite architecture or major capabilities change, update `ONESIMPLESITE_CONTEXT.md` in the GitHub repository and replace the project source in ChatGPT. Do not paste the full Claude skill into the project instructions; use the compact context file so behavior and source knowledge remain separate.

