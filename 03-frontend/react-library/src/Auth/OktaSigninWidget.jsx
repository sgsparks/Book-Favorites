import {useEffect, useRef} from 'react';
import OktaSignIn from '@okta/oka-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import {oktaConfig} from '../../lib/oktaConfig';

const OktaSignInWidget = ({onSuccess, onError}) => {

  const widgetRef = useRef();

  useEffect(() => {

    if(!widgetRef) {
      return false;
    }

    const widget = new OktaSignIn(oktaConfig);
    widget.showSignIntoGetTokens({
      el: widgetRef.current
    }).then(onSuccess).catch(onError)
  }, [onSuccess, onError]);

  return (
    <div className='container mt-m5-mb-5'>
      <div ref={widgetRef}></div>
    </div>
  );
};

export default OktaSignInWidget;