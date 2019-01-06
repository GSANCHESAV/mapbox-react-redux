import { ADD_USER } from '../actions/actionTypes';

const INITIAL_STATE = {
  users: [
    {
      latitude: -23.5439948,
      longitude: -46.6065452,
      info: {
        login: 'octocat',
        id: 1,
        node_id: 'MDQ6VXNlcjE=',
        avatar_url: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/octocat',
        html_url: 'https://github.com/octocat',
        followers_url: 'https://api.github.com/users/octocat/followers',
        following_url: 'https://api.github.com/users/octocat/following{/other_user}',
        gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/octocat/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
        organizations_url: 'https://api.github.com/users/octocat/orgs',
        repos_url: 'https://api.github.com/users/octocat/repos',
        events_url: 'https://api.github.com/users/octocat/events{/privacy}',
        received_events_url: 'https://api.github.com/users/octocat/received_events',
        type: 'User',
        site_admin: false,
        name: 'monalisa octocat',
        company: 'GitHub',
        blog: 'https://github.com/blog',
        location: 'San Francisco',
        email: 'octocat@github.com',
        hireable: false,
        bio: 'There once was...',
        public_repos: 2,
        public_gists: 1,
        followers: 20,
        following: 0,
        created_at: '2008-01-14T04:33:35Z',
        updated_at: '2008-01-14T04:33:35Z',
      },
    },
    {
      latitude: -23.54242107867366,
      longitude: -46.59362768138806,
      info: {
        login: 'octocat',
        id: 2,
        node_id: 'MDQ6VXNlcjE=',
        avatar_url: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/octocat',
        html_url: 'https://github.com/octocat',
        followers_url: 'https://api.github.com/users/octocat/followers',
        following_url: 'https://api.github.com/users/octocat/following{/other_user}',
        gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/octocat/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
        organizations_url: 'https://api.github.com/users/octocat/orgs',
        repos_url: 'https://api.github.com/users/octocat/repos',
        events_url: 'https://api.github.com/users/octocat/events{/privacy}',
        received_events_url: 'https://api.github.com/users/octocat/received_events',
        type: 'User',
        site_admin: false,
        name: 'monalisa octocat',
        company: 'GitHub',
        blog: 'https://github.com/blog',
        location: 'San Francisco',
        email: 'octocat@github.com',
        hireable: false,
        bio: 'There once was...',
        public_repos: 2,
        public_gists: 1,
        followers: 20,
        following: 0,
        created_at: '2008-01-14T04:33:35Z',
        updated_at: '2008-01-14T04:33:35Z',
      },
    },
  ],
};

export default function list(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_USER:
      console.log(state.users);
      return [...state.users, action.payload.info];

    default:
      console.log('Ainda não foi');
      return state;
  }
}
