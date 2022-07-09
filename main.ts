const dirIgnored = [".git", ".vscode"];

for await (const dirEntry of Deno.readDir(".")) {
  if (dirEntry.isDirectory && !dirIgnored.includes(dirEntry.name)) {
    console.log("\n=== " + dirEntry.name + " ===");
    const c = Deno.run({ cmd: ["deno", "run", `${dirEntry.name}/main.ts`] });
    await c.status();
  }
}
