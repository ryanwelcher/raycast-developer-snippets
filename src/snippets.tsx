export type Snippet = {
    id: number
    name: string
    package: string
    since: string,
    snippet: string
    url: string
}
  
const snippets:Snippet[] = [
    {
      id: 1,
      name: 'createNotice',
      package: '@wordpress/notices',
      since: 'WordPress 5.0',
      snippet: `
  import { __ } from '@wordpress/i18n';
  import { useDispatch } from '@wordpress/data';
  import { store as noticesStore } from '@wordpress/notices';
  import { Button } from '@wordpress/components';
  
  const ExampleComponent = () => {
      const { createNotice } = useDispatch( noticesStore );
      return (
          <Button
              onClick={ () => createNotice( 'success', __( 'Notice message' ) ) }
          >
              { __( 'Generate a success notice!' ) }
          </Button>
      );
  };`,
        url: 'https://developer.wordpress.org/block-editor/reference-guides/data/data-core-notices/#createnotice'
    },
    {
      id: 2,
      name: 'PanelBody component',
      package: '@wordpress/components',
      since: 'WordPress 5.0',
      snippet: `
import { PanelBody} from '@wordpress/components';

<PanelBody
    title="Panel Title"
    opened
    className="panel-body-class"
    icon="smiley"
    onToggle={() => {console.log('Toggled');}}
    initialOpen={true|false}
    children={(opened) => {console.log(opened);}}
    buttonProps={{}}
    >
        
</PanelBody>`,
        url: 'https://github.com/WordPress/gutenberg/tree/trunk/packages/components/src/panel#panelbody'
    },
];

export default snippets
