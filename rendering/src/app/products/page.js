import { Suspense } from 'react';
import { ProductsComments } from '../components/ProductsComments.js';
import { ProductsReview } from '../components//ProductsReview.js';

function page() {
  return (
    <div className='flex flex-col'>
        <h1>All Products</h1>
        <div>
            <Suspense fallback="Loading...">
                <ProductsReview/>
            </Suspense>      
        </div>
        <div>
            <Suspense fallback="Loading...">
                <ProductsComments/>
            </Suspense>
        </div>
    </div>
  );
}

export default page;
