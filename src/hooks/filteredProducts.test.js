import axios from 'axios';
import { renderHook } from '@testing-library/react-hooks';
import useFilteredProducts from './filteredProducts';

describe('the useFilteredProducts hook', () => {
  it('should make an api call to fetch products from server', async () => {
    const mockAxios = jest.spyOn(axios, 'get');
    mockAxios.mockResolvedValue({ data: [] });
    const { result, waitForNextUpdate } = renderHook(() => useFilteredProducts());
    await waitForNextUpdate();
    expect(mockAxios).toHaveBeenCalledWith('http://localhost:8080/products');
    expect(result.current[0]).toEqual({});
  });
});
