/**
 * Raycast dependencies
 */
import { List,ActionPanel, Action} from "@raycast/api";

/**
 * Internal dependencies
 */
import snippets , { Snippet }from "./snippets";

const generatePreview = ( details: Snippet ):string => {
  const { name, snippet, package:pkg, since } = details;
  const preview = '## ' + name+ '\n**Package**: *'+ pkg +'*\n\n**Since**: *'+ since +'*\n#### Snippet\n```jsx' + snippet;
  return preview;
}

export default function Command() {
  return (
    <List navigationTitle="Available snippets" isShowingDetail>
       { snippets.map( (details) => {
        const {id, name, desc, snippet, url} = details
        return (
          <List.Item
          key={id}
          id={name}
          title={name}
          subtitle={desc}
          actions={
          <ActionPanel title="#1 in raycast/extensions">
              <Action.CopyToClipboard title="Copy to Clipboard" content={snippet} />
              <Action.OpenInBrowser title={`Go to Documentation`} url={url} />
            </ActionPanel>
          }
          detail={<List.Item.Detail markdown={generatePreview(details)} />}
        />
        )
       })}
       
   </List>
  )
}