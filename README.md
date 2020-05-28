# Setup
1. Push this repo's code to a scratch org.
2. Run [this apex file](/scripts/apex/push-topic.apex) as Anonymous Apex to setup the PushTopic event.
3. Navigate to the Salesforce home page of your scratch org.
4. Create an Account or change an existing Account's name to see the component on the home page update in real time.

# Notable Metadata
 - [lastChangedAccount](/force-app/main/default/lwc/lastChangedAccount) (LWC) - Shows the last changed Account objects's Name and Id.
 - [LastChangedAccount](/force-app/main/default/flexipages/LastChangedAccount.flexipage-meta.xml) (Lightning Home Page) - Houses the `lastChangedAccount` LWC as well as a Recent Items standard component.